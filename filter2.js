// Filter functionality for Graduate Programs
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
      if (selectedDegree === 'Master of Arts (M.A.)' && !categoryTitle.includes('Master of Arts') || 
          selectedDegree === 'Master of Arts (M.A.)' && categoryTitle.includes('Teaching')) {
        shouldShow = false;
      } else if (selectedDegree === 'Master of Arts in Teaching (M.A.T.)' && !categoryTitle.includes('Teaching')) {
        shouldShow = false;
      } else if (selectedDegree === 'Master of Science (M.S.)' && !categoryTitle.includes('Master of Science')) {
        shouldShow = false;
      } else if (selectedDegree === '5-Year Bachelor/Master' && !categoryTitle.includes('5-Year')) {
        shouldShow = false;
      } else if (selectedDegree === '3+3 Bachelor/Juris Doctor' && !categoryTitle.includes('3+3')) {
        shouldShow = false;
      } else if (selectedDegree === '7-Year Dual-Degree Medical' && !categoryTitle.includes('7-Year')) {
        shouldShow = false;
      } else if (selectedDegree === 'Certificate' && !categoryTitle.includes('Certificate')) {
        shouldShow = false;
      } else if (selectedDegree === 'Micro Credentials' && !categoryTitle.includes('Micro')) {
        shouldShow = false;
      } else if (selectedDegree === 'Minor' && !categoryTitle.includes('Minor')) {
        shouldShow = false;
      }
    }

    // Filter by school
    if (selectedSchool !== '- Any -' && shouldShow) {
      const programs = category.querySelectorAll('.programs li');
      let hasMatchingProgram = false;

      programs.forEach(program => {
        const programText = program.textContent.toLowerCase();
        let programMatches = true;

        if (selectedSchool === 'School of Business') {
          programMatches = programText.includes('accounting') || 
                          programText.includes('taxation') || 
                          programText.includes('business') ||
                          programText.includes('finance') ||
                          programText.includes('management') ||
                          programText.includes('marketing') ||
                          programText.includes('economics') ||
                          programText.includes('forensic accounting');
        } else if (selectedSchool === 'School of Education') {
          programMatches = programText.includes('education') ||
                          programText.includes('literacy') ||
                          programText.includes('counseling') ||
                          programText.includes('special education') ||
                          programText.includes('teaching');
        } else if (selectedSchool === 'School of Arts and Sciences') {
          programMatches = programText.includes('liberal studies') ||
                          programText.includes('data science') ||
                          programText.includes('healthcare') ||
                          programText.includes('american studies') ||
                          programText.includes('english') ||
                          programText.includes('history') ||
                          programText.includes('politics') ||
                          programText.includes('biology') ||
                          programText.includes('biochemistry') ||
                          programText.includes('biological') ||
                          programText.includes('mathematics') ||
                          programText.includes('chemistry') ||
                          programText.includes('psychology') ||
                          programText.includes('computer') ||
                          programText.includes('african american') ||
                          programText.includes('environmental') ||
                          programText.includes('french') ||
                          programText.includes('global') ||
                          programText.includes('hispanic') ||
                          programText.includes('italian') ||
                          programText.includes('media') ||
                          programText.includes('neuropsychology') ||
                          programText.includes('philosophy') ||
                          programText.includes('physics') ||
                          programText.includes('public health') ||
                          programText.includes('public policy') ||
                          programText.includes('social work') ||
                          programText.includes('spanish') ||
                          programText.includes('visual arts') ||
                          programText.includes('women') ||
                          programText.includes('pre health') ||
                          programText.includes('pre-law') ||
                          programText.includes('video production') ||
                          programText.includes('creative writing') ||
                          programText.includes('neuropsychopharmacology') ||
                          programText.includes('nonprofit') ||
                          programText.includes('translation') ||
                          programText.includes('cognitive') ||
                          programText.includes('workplace') ||
                          programText.includes('sports') ||
                          programText.includes('entertainment') ||
                          programText.includes('diversity') ||
                          programText.includes('applied behavior') ||
                          programText.includes('congregational') ||
                          programText.includes('islamic') ||
                          programText.includes('law') ||
                          programText.includes('medicine') ||
                          programText.includes('podiatric');
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