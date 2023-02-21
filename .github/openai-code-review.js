const openai = require('openai');
const GPT_API_KEY = process.env.OPENAI_API_KEY;

async function runCodeReview(prNumber) {
  const prChanges = await getPRChanges(prNumber);

  // Extract code changes from PR
  const codeChanges = extractCodeChanges(prChanges);

  // Run code review using GPT-3
  const review = await openai.complete({
    engine: 'text-davinci-002',
    prompt: `Please review the following code changes:\n\n${codeChanges}\n\nReview:`,
    maxTokens: 1024,
    temperature: 0.7,
    n: 1,
    stop: '\n\n',
  }, GPT_API_KEY);

  // Extract feedback from GPT-3 response
  const feedback = review.choices[0].text.trim();

  // Post feedback to GitHub PR comments
  postComment(prNumber, feedback);
}

async function getPRChanges(prNumber) {
  // Use the GitHub API to get the changes for a specific PR
  const response = await fetch(`https://api.github.com/repos/jakubjirous/interactive-rating-component/pulls/${prNumber}/files`, {
    headers: {
      'Authorization': `Bearer ${process.env.GH_TOKEN}`
    }
  });
  return await response.json();
}

function extractCodeChanges(prChanges) {
  // Extract the code changes from the PR response
  return prChanges.map((change) => {
    return `Changes in file: ${change.filename}\n\n${change.patch}\n\n`;
  }).join('');
}

async function postComment(prNumber, feedback) {
  // Use the GitHub API to post a comment to the PR
  const response = await fetch(`https://api.github.com/repos/jakubjirous/interactive-rating-component/issues/${prNumber}/comments`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GH_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body: feedback })
  });
  return await response.json();
}

module.exports = runCodeReview;
