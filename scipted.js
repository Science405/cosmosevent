
        // Create stars
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = `${Math.random() * 3}px`;
            star.style.height = star.style.width;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.setProperty('--duration', `${2 + Math.random() * 3}s`);
            starsContainer.appendChild(star);
        }
        
        // Form submission
        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const address = document.getElementById('address').value;
            const contact = document.getElementById('contact').value;
            const school = document.getElementById('school').value;
            const height = document.getElementById('height').value;
            const weight = document.getElementById('weight').value;
            const regDate = document.getElementById('regDate').value;
            
            // Handle photo
            const photoFile = document.getElementById('photo').files[0];
            if (photoFile) {
                const photoUrl = URL.createObjectURL(photoFile);
                document.getElementById('confirmationPhoto').src = photoUrl;
            }
            
            // Populate confirmation card
            document.getElementById('confirmName').textContent = name;
            document.getElementById('confirmAge').textContent = age;
            document.getElementById('confirmContact').textContent = contact;
            document.getElementById('confirmSchool').textContent = school;
            document.getElementById('confirmHeightWeight').textContent = `${height} cm / ${weight} kg`;
            document.getElementById('confirmAddress').textContent = address;
            document.getElementById('confirmRegDate').textContent = regDate;
            
            // Show confirmation card
            document.getElementById('confirmationCard').style.display = 'block';
            
            // Scroll to confirmation
            document.getElementById('confirmationCard').scrollIntoView({ behavior: 'smooth' });
        });
    