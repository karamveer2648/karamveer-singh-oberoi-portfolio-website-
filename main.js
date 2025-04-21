// Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
    // Get the element where typing animation will be displayed
    const textElement = document.getElementById('typing-text');
    
    // Array of skills to be displayed in the typing animation
    const skills = [
        "CSE Engineering", 
        "Java & Python Development",
        "Django Web Development",
        "AI/ML Solutions",
        "IBM Cloud Architecture"
    ];
    
    // Variables to control the typing animation
    let skillIndex = 0;      // Current skill being displayed
    let charIndex = 0;       // Current character position
    let isDeleting = false;  // Whether we're currently deleting text
    let typingDelay = 100;   // Delay between typing each character (ms)
    let deletingDelay = 50;  // Delay between deleting each character (ms)
    let newTextDelay = 1500; // Pause before starting to delete text (ms)
    
    /**
     * Function that handles the typing and deleting animation
     * Controls the text display, timing, and cycling through skills
     */
    function typeText() {
        // Get the current skill from the array
        const currentSkill = skills[skillIndex];
        
        if (isDeleting) {
            // If deleting, remove a character
            textElement.textContent = currentSkill.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // If typing, add a character
            textElement.textContent = currentSkill.substring(0, charIndex + 1);
            charIndex++;
        }
        
        // Set the speed based on whether we're typing or deleting
        let typingSpeed = isDeleting ? deletingDelay : typingDelay;
        
        // Check if we need to change direction (typing to deleting or vice versa)
        if (!isDeleting && charIndex === currentSkill.length) {
            // Finished typing the full text, switch to deleting
            isDeleting = true;
            typingSpeed = newTextDelay; // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting, move to next skill
            isDeleting = false;
            skillIndex = (skillIndex + 1) % skills.length; // Loop through skills array
        }
        
        // Schedule the next update
        setTimeout(typeText, typingSpeed);
    }
    
    // Start the typing animation after a delay of 1 second
    setTimeout(typeText, 1000);
    
    // Add CSS for slow spinning animation
    document.documentElement.style.setProperty('--spin-slow', 'spin 15s linear infinite');
    document.styleSheets[0].insertRule('@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }', 0);
    
    // Apply the spinning animation to elements with class 'animate-spin-slow'
    document.querySelectorAll('.animate-spin-slow').forEach(el => {
        el.style.animation = 'spin-slow 15s linear infinite';
    });
});


 // Store all about section data in one place
 const aboutData = {
    profile: {
        image: "https://karamveer2648.github.io/mahaprojectimagerepo/Karamveer.png",
        badges: {
            primary: "CSE Engineer",
            secondary: "AI Enthusiast"
        },
        experienceBadge: {
            title: "CSE",
            subtitle: "Student"
        }
    },
    content: {
        tagline: "Passionate about technology, creativity, and innovation",
        headline: "Engineering <span class='gradient-text'>Tomorrow's Solutions</span> Today",
        paragraphs: [
            {
                highlight: "primary",
                content: "I'm a <strong>Computer Science Engineering student</strong> with a passion for AI, ML, cloud solutions, and web development. My journey in tech is driven by curiosity and the desire to solve real-world problems."
            }
        ]
    },
    stats: [
        { value: "12+", label: "Projects" },
        { value: "7+", label: "Certifications" },
        { value: "5+", label: "Internships" }
    ],
    education: [
        {
            degree: "B. Tech. in Computer Science Engineering",
            institution: "P.R.Pote Patil College of Engineering and Management, Amravati",
            period: "September 2023 - September 2026",
            score: "CGPA: 6.9"
        },
        {
            degree: "Diploma in Computer Engineering",
            institution: "Dr. Panjabrao Deshmukh Rural Polytechnic, Amravati",
            period: "July 2020 - July 2023",
            score: "Percentage: 83%"
        }
    ],
    resumeLink: "#" // Replace with actual resume link
};

// Function to load about section data
function loadAboutData() {
    // Profile image and badges
    document.getElementById("profile-image").src = aboutData.profile.image;
    document.getElementById("badge-1").textContent = aboutData.profile.badges.primary;
    document.getElementById("badge-2").textContent = aboutData.profile.badges.secondary;
    
    // Experience badge
    const expBadge = document.getElementById("experience-badge");
    expBadge.innerHTML = `
        <span class="text-lg font-bold">${aboutData.profile.experienceBadge.title}</span>
        <span class="text-xs">${aboutData.profile.experienceBadge.subtitle}</span>
    `;
    
    // Tagline and headline
    document.getElementById("about-tagline").textContent = aboutData.content.tagline;
    document.getElementById("about-headline").innerHTML = aboutData.content.headline;
    
    // Paragraphs
    const paragraphsContainer = document.getElementById("about-paragraphs");
    aboutData.content.paragraphs.forEach(para => {
        let highlightClass = '';
        if (para.highlight === 'primary') highlightClass = 'border-primary/30';
        else if (para.highlight === 'accent') highlightClass = 'border-accent/30';
        else if (para.highlight === 'gradient') highlightClass = 'border-gradient-to-r from-primary/30 to-accent/30';
        
        const dotClass = para.highlight === 'gradient' 
            ? 'bg-gradient-to-r from-primary to-accent' 
            : `bg-${para.highlight}`;
        
        const paragraph = document.createElement('p');
        paragraph.className = `relative pl-6 border-l-2 ${highlightClass}`;
        paragraph.innerHTML = `
            <span class="absolute -left-2 top-0 w-4 h-4 ${dotClass} rounded-full"></span>
            ${para.content}
        `;
        paragraphsContainer.appendChild(paragraph);
    });
    
    // Stats
    document.getElementById("stat-1-value").textContent = aboutData.stats[0].value;
    document.getElementById("stat-1-label").textContent = aboutData.stats[0].label;
    document.getElementById("stat-2-value").textContent = aboutData.stats[1].value;
    document.getElementById("stat-2-label").textContent = aboutData.stats[1].label;
    document.getElementById("stat-3-value").textContent = aboutData.stats[2].value;
    document.getElementById("stat-3-label").textContent = aboutData.stats[2].label;
    
    // Education
    const educationContainer = document.getElementById("education-timeline");
    aboutData.education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'relative';
        eduItem.innerHTML = `
            <h5 class="text-lg font-semibold">${edu.degree}</h5>
            <p class="text-gray-600 dark:text-gray-400">${edu.institution}</p>
            <p class="text-sm text-primary dark:text-accent">${edu.period}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">${edu.score}</p>
        `;
        educationContainer.appendChild(eduItem);
    });
    
    // Resume link
    document.getElementById("resume-link").href = aboutData.resumeLink;
}

// Load about data when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    loadAboutData();
});
document.addEventListener('DOMContentLoaded', function() {
    // ===== SKILLS DATA DEFINITION =====
    // Main data structure containing all skill information organized by categories
    const skillsData = {
        // Define the categories that will appear as tabs
        categories: [
            {
                id: 'languages',
                name: 'Languages',
                icon: '<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>'
            },
            {
                id: 'frameworks',
                name: 'Frameworks',
                icon: '<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>'
            },
            {
                id: 'cloud',
                name: 'Cloud & DevOps',
                icon: '<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>'
            },
            {
                id: 'soft',
                name: 'Soft Skills',
                icon: '<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>'
            }
        ],
        
        // Detailed skill information for each category
        skills: {
            // Programming languages with proficiency levels and descriptions
            languages: [
                {
                    name: 'Java',
                    level: '90%',
                    label: 'Expert',
                    icon: 'J',
                    color: 'blue',
                    gradient: 'from-blue-400 to-primary',
                    description: 'Strong OOP focus with experience in enterprise applications and design patterns.'
                },
                {
                    name: 'Python',
                    level: '85%',
                    label: 'Advanced',
                    icon: 'Py',
                    color: 'cyan',
                    gradient: 'from-cyan-400 to-blue-500',
                    description: 'Proficient in data analysis, automation scripts, and web development.'
                },
                {
                    name: 'JavaScript',
                    level: '75%',
                    label: 'Proficient',
                    icon: 'JS',
                    color: 'yellow',
                    gradient: 'from-yellow-400 to-amber-500',
                    description: 'Strong understanding of ES6+, DOM manipulation, and async programming.'
                },
                {
                    name: 'C/C++',
                    level: '70%',
                    label: 'Competent',
                    icon: 'C++',
                    color: 'blue',
                    gradient: 'from-blue-300 to-blue-400',
                    description: 'Experience with algorithms, data structures, and system-level programming.'
                }
            ],
            // Web and development frameworks
            frameworks: [
                {
                    name: 'Django',
                    level: '80%',
                    label: 'Advanced',
                    icon: 'Dj',
                    color: 'green',
                    gradient: 'from-green-400 to-green-600',
                    description: 'Full-stack web development with focus on rapid development and clean design.'
                },
                {
                    name: 'TensorFlow',
                    level: '75%',
                    label: 'Proficient',
                    icon: 'TF',
                    color: 'orange',
                    gradient: 'from-orange-400 to-orange-600',
                    description: 'Building and training neural networks for computer vision applications.'
                },
                {
                    name: 'scikit-learn',
                    level: '70%',
                    label: 'Competent',
                    icon: 'Sk',
                    color: 'blue',
                    gradient: 'from-blue-400 to-blue-600',
                    description: 'Implementation of ML algorithms and data preprocessing pipelines.'
                }
            ],
            // Cloud and DevOps tools
            cloud: [
                {
                    name: 'IBM Cloud',
                    level: '85%',
                    label: 'Advanced',
                    icon: 'IBM',
                    color: 'blue',
                    gradient: 'from-blue-500 to-blue-700',
                    description: 'Deployment and management of cloud services and applications.'
                },
                {
                    name: 'Git/GitHub',
                    level: '80%',
                    label: 'Proficient',
                    icon: 'Git',
                    color: 'purple',
                    gradient: 'from-purple-500 to-purple-700',
                    description: 'Version control, collaboration workflows, and CI/CD integration.'
                },
                {
                    name: 'Netlify',
                    level: '75%',
                    label: 'Competent',
                    icon: 'N',
                    color: 'teal',
                    gradient: 'from-teal-500 to-teal-700',
                    description: 'Static site deployment with continuous integration.'
                },
                {
                    name: 'Docker Basics',
                    level: '60%',
                    label: 'Developing',
                    icon: 'D',
                    color: 'sky',
                    gradient: 'from-sky-400 to-sky-600',
                    description: 'Container creation and basic orchestration concepts.'
                }
            ],
            // Soft skills with descriptions and icons
            soft: [
                {
                    name: 'Problem Solving',
                    icon: '<svg class="w-8 h-8 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg>',
                    color: 'blue',
                    description: 'Analytical approach to resolving complex technical challenges.'
                },
                {
                    name: 'Data Analysis',
                    icon: '<svg class="w-8 h-8 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>',
                    color: 'purple',
                    description: 'Extracting insights and creating actionable strategies from data.'
                },
                {
                    name: 'Web Design',
                    icon: '<svg class="w-8 h-8 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>',
                    color: 'green',
                    description: 'Creating intuitive interfaces with focus on user experience.'
                },
                {
                    name: 'Project Management',
                    icon: '<svg class="w-8 h-8 text-amber-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>',
                    color: 'amber',
                    description: 'Planning and execution of projects to ensure timely delivery.'
                },
                {
                    name: 'Team Leadership',
                    icon: '<svg class="w-8 h-8 text-rose-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>',
                    color: 'rose',
                    description: 'Guiding teams through effective communication and delegation.'
                },
                {
                    name: 'Communication',
                    icon: '<svg class="w-8 h-8 text-indigo-500 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path></svg>',
                    color: 'indigo',
                    description: 'Clearly conveying complex technical concepts to diverse audiences.'
                }
            ]
        },
        
        // Skills currently being learned (displayed separately)
        currentlyLearning: [
            'Deep Learning',
            'AWS Cloud',
            'Flutter Development',
            'Blockchain Fundamentals'
        ]
    };
    
    // ===== TAB NAVIGATION GENERATION =====
    // Create tab buttons for each skill category
    const tabsNav = document.querySelector('.tabs-nav');
    skillsData.categories.forEach((category, index) => {
        const button = document.createElement('button');
        // Apply styling classes - first tab starts as active
        button.className = `tab-btn px-4 py-2.5 text-sm md:text-base font-medium rounded-lg transition-all duration-200 ${index === 0 ? 'active-tab bg-white dark:bg-gray-700 text-primary dark:text-accent shadow-md' : ''}`;
        button.setAttribute('data-tab', category.id);
        button.innerHTML = `<span class="flex items-center">${category.icon}${category.name}</span>`;
        tabsNav.appendChild(button);
    });
    
    // ===== TAB CONTENT GENERATION =====
    // Create content sections for each tab
    const tabContentContainer = document.querySelector('.tab-content-container');
    skillsData.categories.forEach((category, index) => {
        const tabContent = document.createElement('div');
        tabContent.id = `${category.id}-tab`;
        // Only the first tab is visible initially
        tabContent.className = `tab-content ${index === 0 ? 'active' : 'hidden'}`;
        
        let contentHTML = `
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <h3 class="text-2xl font-bold mb-6 text-center">${category.name}</h3>
        `;
        
        // Use different layout for soft skills (card-based) vs technical skills (progress bars)
        if (category.id === 'soft') {
            // Soft skills layout with cards in a grid
            contentHTML += `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">`;
            
            skillsData.skills[category.id].forEach(skill => {
                contentHTML += `
                    <div class="p-6 bg-gradient-to-br from-${skill.color}-50 to-${skill.color}-100 dark:from-${skill.color}-900/20 dark:to-${skill.color}-800/30 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <div class="flex items-center mb-4">
                            ${skill.icon}
                            <h4 class="text-lg font-semibold">${skill.name}</h4>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300">${skill.description}</p>
                    </div>
                `;
            });
            
            contentHTML += `</div>`;
        } else {
            // Technical skills layout with progress bars in two columns
            contentHTML += `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-8">
            `;
            
            // Calculate middle point to split skills into two columns
            const halfLength = Math.ceil(skillsData.skills[category.id].length / 2);
            
            skillsData.skills[category.id].forEach((skill, skillIndex) => {
                // Create second column when we reach the halfway point
                if (skillIndex === halfLength) {
                    contentHTML += `
                        </div>
                        <div class="space-y-8">
                    `;
                }
                
                // Generate skill item with progress bar
                contentHTML += `
                    <div>
                        <div class="flex justify-between mb-2">
                            <div class="flex items-center">
                                <span class="w-8 h-8 rounded-full bg-${skill.color}-100 dark:bg-${skill.color}-900/30 flex items-center justify-center mr-3">
                                    <span class="text-xs font-bold text-${skill.color}-600 dark:text-${skill.color}-400">${skill.icon}</span>
                                </span>
                                <span class="font-semibold text-lg">${skill.name}</span>
                            </div>
                            <span class="text-primary dark:text-accent font-medium">${skill.level}</span>
                        </div>
                        <div class="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div class="skill-bar h-full bg-gradient-to-r ${skill.gradient} rounded-full relative flex items-center" style="width: 0%">
                                <span class="absolute right-1 text-[10px] text-white">${skill.label}</span>
                            </div>
                        </div>
                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">${skill.description}</p>
                    </div>
                `;
            });
            
            contentHTML += `
                    </div>
                </div>
            `;
        }
        
        contentHTML += `</div>`;
        tabContent.innerHTML = contentHTML;
        tabContentContainer.appendChild(tabContent);
    });
    
    // ===== CURRENTLY LEARNING SECTION =====
    // Generate badges for skills currently being learned
    const learningContainer = document.getElementById('learning-container');
    skillsData.currentlyLearning.forEach(item => {
        const span = document.createElement('span');
        span.className = 'px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 dark:border-accent/20 rounded-full text-primary dark:text-accent text-sm font-medium';
        span.textContent = item;
        learningContainer.appendChild(span);
    });
    
    // ===== TAB SWITCHING FUNCTIONALITY =====
    // Set up event listeners for tab navigation
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active styling from all tab buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active-tab', 'bg-white', 'dark:bg-gray-700', 'text-primary', 'dark:text-accent', 'shadow-md');
            });
            
            // Add active styling to clicked button
            button.classList.add('active-tab', 'bg-white', 'dark:bg-gray-700', 'text-primary', 'dark:text-accent', 'shadow-md');
            
            // Hide all content tabs
            tabContents.forEach(content => {
                content.classList.add('hidden');
                content.classList.remove('active');
            });
            
            // Show the selected tab content
            const tabId = button.dataset.tab + '-tab';
            const activeContent = document.getElementById(tabId);
            activeContent.classList.remove('hidden');
            activeContent.classList.add('active');
            
            // Animate skill bars in the newly visible tab
            animateSkillBars(activeContent);
        });
    });
    
    // ===== SKILL BAR ANIMATION =====
    /**
     * Animates the skill bars to grow to their target width
     * @param {HTMLElement} container - The container element that holds the skill bars
     */
    function animateSkillBars(container) {
        const skillBars = container.querySelectorAll('.skill-bar');
        
        // Small delay before starting animation
        setTimeout(() => {
            skillBars.forEach(bar => {
                // Get the target width from the percentage text
                const targetWidth = bar.parentElement.previousElementSibling.lastElementChild.textContent;
                // Reset width to zero initially
                bar.style.width = "0%";
                
                // Animate to the target width
                setTimeout(() => {
                    bar.style.width = targetWidth;
                    bar.style.transition = "width 1.5s ease-in-out";
                }, 100);
            });
        }, 100);
    }
    
    // Initialize by animating skill bars in the default active tab
    animateSkillBars(document.querySelector('.tab-content.active'));
});