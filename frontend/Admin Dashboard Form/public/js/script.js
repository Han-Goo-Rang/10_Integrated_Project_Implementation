document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('borrowedReturnedChart').getContext('2d');
    const borrowedReturnedChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Total Borrowed Books', 'Total Returned Books'],
            datasets: [{
                data: [700, 300], // Example data
                backgroundColor: ['#4caf50', '#f44336'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Borrowed and Returned Books'
                }
            }
        }
    });
});