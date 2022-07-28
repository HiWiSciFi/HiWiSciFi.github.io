var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/HiWiSciFi/HiWiSciFi,github.io.git', // Update to point to your repository  
        user: {
            name: 'Max Hager', // update to use your name
            email: '19999080+HiWiSciFi@users.noreply.github.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
