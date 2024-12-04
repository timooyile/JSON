const jsonUrl = 'https://timooyile.github.io/Wad/Mak-Private-Sponsorship-List.json';

fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        visualizeData(data);
        visualizeDataDistrict(data);
        visualizeDatatrends(data);
        visualizeDatapopularity(data);
        

    })
    .catch(error => console.error('Error fetching data:', error));

    function visualizeData(data) {
        // Step 1: Aggregate all students from all pages
        const allStudents = data.admissionData.pages.flatMap(page => page.students);
    
        // Step 2: Count students by gender
        const genderCounts = allStudents.reduce((counts, student) => {
            counts[student.gender] = (counts[student.gender] || 0) + 1;
            return counts;
        }, {});
    
        const genders = Object.keys(genderCounts);
        const counts = Object.values(genderCounts);
    
        // Step 3: Render Chart
        const ctx = document.getElementById('admissionChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar', // Change to 'bar', 'line', etc., if desired
            data: {
                labels: genders,
                datasets: [{
                    label: 'Gender Distribution',
                    data: counts,
                    backgroundColor: ['#4CAF50', '#FF5722', '#2196F3', '#FFC107', '#9C27B0'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }


    function visualizeDataDistrict(data) {
        // Step 1: Aggregate all students from all pages
        const allStudents = data.admissionData.pages.flatMap(page => page.students);
    
        // Step 2: Count students by district
        const districtCounts = allStudents.reduce((counts, student) => {
            counts[student.districtName] = (counts[student.districtName] || 0) + 1;
            return counts;
        }, {});
    
        const districtName = Object.keys(districtCounts);
        const counts = Object.values(districtCounts);
    
        // Step 3: Render Chart
        const ctx = document.getElementById('districtchart').getContext('2d');
        new Chart(ctx, {
            type: 'bar', // Change to 'bar', 'line', etc., if desired
            data: {
                labels: districtName,
                datasets: [{
                    label: 'Students Per District',
                    data: counts,
                    backgroundColor: ['#4CAF50', '#FF5722', '#2196F3', '#FFC107', '#9C27B0'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }
    
    
    function visualizeDatatrends(data) {
        // Step 1: Aggregate all students from all pages
        const allStudents = data.admissionData.pages.flatMap(page => page.students);
    
        // Step 2: Present trend over the years
        const trendCounts = allStudents.reduce((counts, student) => {
            counts[student.year] = (counts[student.year] || 0) + 1;
            return counts;
        }, {});
    
        const year = Object.keys(trendCounts);
        const counts = Object.values(trendCounts);
    
        // Step 3: Render Chart
        const ctx = document.getElementById('trends').getContext('2d');
        new Chart(ctx, {
            type: 'line', // Change to 'bar', 'line', etc., if desired
            data: {
                labels: year,
                datasets: [{
                    label: 'Admission Trends Over Years',
                    data: counts,
                    backgroundColor: ['#4CAF50', '#FF5722', '#2196F3', '#FFC107', '#9C27B0'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }


    function visualizeDatapopularity(data) {
        // Step 1: Aggregate all students from all pages
        const allStudents = data.admissionData.pages.flatMap(page => page.students);
    
        // Step 2: Showing popular course 
        const popularityCounts = allStudents.reduce((counts, student) => {
            counts[student.course] = (counts[student.course] || 0) + 1;
            return counts;
        }, {});
    
        const course = Object.keys(popularityCounts);
        const counts = Object.values(popularityCounts);
    
        // Step 3: Render Chart
        const ctx = document.getElementById('popularity').getContext('2d');
        new Chart(ctx, {
            type: 'pie', // Change to 'bar', 'line', etc., if desired
            data: {
                labels: course,
                datasets: [{
                    label: 'Popular Course Over The Years',
                    data: counts,
                    backgroundColor: ['#4CAF50', '#FF5722', '#2196F3', '#FFC107', '#9C27B0'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }
