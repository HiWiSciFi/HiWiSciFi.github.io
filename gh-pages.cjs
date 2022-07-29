var ghpages = require('gh-pages');

ghpages.publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/HiWiSciFi/HiWiSciFi.github.io.git',
        user: {
            name: 'Max Hager',
            email: '19999080+HiWiSciFi@users.noreply.github.com'
        },
		dotfiles: true
    },
    () => {
        console.log('Deploy Complete!')
    }
)
