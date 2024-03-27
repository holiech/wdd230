let visited = localStorage.getItem('visited');
        const visitElement = document.querySelector('#visit');
        
        if (visited) {
            const currentDate = new Date();
            const diffTime = Math.abs(currentDate - new Date(visited));
            const diffDays = Math.floor(diffTime / (1000 * 60  * 24));

            if (diffDays === 0) {
                visitElement.textContent = "Back so soon! Awesome!";
            } else {
                visitElement.textContent = `You last visited ${diffDays} day${diffDays === 1 ? '' : 's'} ago.`;
            }
        } else {
            visitElement.textContent = "Welcome! Let us know if you have any questions.";
        }

        localStorage.setItem('visited', new Date());