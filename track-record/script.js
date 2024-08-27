document.addEventListener('DOMContentLoaded', function() {
    const activityData = [
        { date: '2023-08-01', level: 2, details: '1 project completed' },
        { date: '2023-08-02', level: 3, details: '2 projects completed' },
        { date: '2023-08-04', level: 1, details: 'Worked 5 hours' },
        { date: '2023-08-07', level: 4, details: '3 projects completed' },
        // Add more entries as needed
    ];

    const gridContainer = document.querySelector('.track-record-grid');
    const totalDays = 365;
    const startDate = new Date('2023-01-01');
    let dateCounter = new Date(startDate);

    for (let i = 0; i < totalDays; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';

        const dateString = dateCounter.toISOString().split('T')[0];
        const activity = activityData.find(data => data.date === dateString);

        if (activity) {
            cell.dataset.level = activity.level;
            cell.dataset.date = activity.date;

            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = `${activity.details} on ${activity.date}`;
            cell.appendChild(tooltip);
        } else {
            cell.dataset.level = 0; // No activity
        }

        gridContainer.appendChild(cell);
        dateCounter.setDate(dateCounter.getDate() + 1);
    }
});
