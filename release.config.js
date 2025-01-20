module.exports = {
    branches: ['main'],
    repositoryUrl: 'https://github.com/Saty248/githubActionsPg',
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/npm',
        '@semantic-release/github',
        '@semantic-release/git'
    ],
    tagFormat: '${version}',
    verifyConditions: [
        '@semantic-release/changelog',
        '@semantic-release/npm',
        '@semantic-release/github',
        '@semantic-release/git'
    ],
    prepare: [
        '@semantic-release/changelog',
        '@semantic-release/npm',
        {
            path: '@semantic-release/git',
            message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }
    ],
    publish: [
        '@semantic-release/npm',
        '@semantic-release/github'
    ],
    success: [
        '@semantic-release/github'
    ],
    fail: [
        '@semantic-release/github'
    ]
};