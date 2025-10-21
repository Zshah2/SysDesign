// Filter functionality
const applyBtn = document.querySelector('.apply-btn');
const resetBtn = document.querySelector('.reset-btn');
const degreeSelect = document.getElementById('degree-type');
const schoolSelect = document.getElementById('school');
const programCategories = document.querySelectorAll('.program-category');

applyBtn.addEventListener('click', filterPrograms);
resetBtn.addEventListener('click', resetFilters);

function filterPrograms() {
  const selectedDegree = degreeSelect.value;
  const selectedSchool = schoolSelect.value;

  programCategories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    let shouldShow = true;

    // Filter by degree type
    if (selectedDegree !== '- Any -') {
      const degreeType = selectedDegree.split('(')[1].replace(')', '').trim();
      if (!categoryTitle.includes(degreeType.split('.')[0])) {
        shouldShow = false;
      }
    }

    // Filter by school (you can expand this logic based on your data)
    if (selectedSchool !== '- Any -' && shouldShow) {
      const programs = category.querySelectorAll('.programs li');
      let hasMatchingProgram = false;

      programs.forEach(program => {
        const programText = program.textContent.toLowerCase();
        let programMatches = true;

        if (selectedSchool === 'School of Business') {
          programMatches = programText.includes('accounting') || 
                          programText.includes('marketing') || 
                          programText.includes('business') ||
                          programText.includes('finance') ||
                          programText.includes('management') ||
                          programText.includes('industrial & labor relations');
        } else if (selectedSchool === 'School of Education') {
          programMatches = programText.includes('education') ||
                          programText.includes('childhood');
        } else if (selectedSchool === 'School of Arts and Sciences') {
          programMatches = programText.includes('english') || 
                          programText.includes('psychology') || 
                          programText.includes('biology') || 
                          programText.includes('computer') || 
                          programText.includes('public health') ||
                          programText.includes('american studies') ||
                          programText.includes('visual arts') ||
                          programText.includes('chemistry') ||
                          programText.includes('criminology') ||
                          programText.includes('history') ||
                          programText.includes('media') ||
                          programText.includes('philosophy') ||
                          programText.includes('political science') ||
                          programText.includes('sociology') ||
                          programText.includes('spanish') ||
                          programText.includes('forensic science') ||
                          programText.includes('mathematics') ||
                          programText.includes('neuroscience') ||
                          programText.includes('physics') ||
                          programText.includes('studio art') ||
                          programText.includes('graphic design') ||
                          programText.includes('professional studies') ||
                          programText.includes('health and wellness');
        }

        if (programMatches) {
          program.style.display = 'list-item';
          hasMatchingProgram = true;
        } else {
          program.style.display = 'none';
        }
      });

      shouldShow = hasMatchingProgram;
    } else if (shouldShow) {
      // Show all programs in this category
      const programs = category.querySelectorAll('.programs li');
      programs.forEach(program => {
        program.style.display = 'list-item';
      });
    }

    category.style.display = shouldShow ? 'block' : 'none';
  });
}

function resetFilters() {
  // Reset dropdowns to default
  degreeSelect.value = '- Any -';
  schoolSelect.value = '- Any -';
  
  // Show all categories and programs
  programCategories.forEach(category => {
    category.style.display = 'block';
    const programs = category.querySelectorAll('.programs li');
    programs.forEach(program => {
      program.style.display = 'list-item';
    });
  });
}

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});