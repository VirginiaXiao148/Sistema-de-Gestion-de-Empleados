document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        login: document.getElementById('loginSection'),
        dashboard: document.getElementById('dashboardSection'),
        employees: document.getElementById('employeeManagementSection'),
        shifts: document.getElementById('shiftSchedulingSection'),
        leaves: document.getElementById('leaveManagementSection'),
        reports: document.getElementById('reportingSection'),
    };

    // Navigation buttons
    const navLinks = {
        employeeManagementBtn: sections.employees,
        shiftSchedulingBtn: sections.shifts,
        leaveManagementBtn: sections.leaves,
        reportingBtn: sections.reports,
    };

    // Hide all sections and show the selected one
    function showSection(section) {
        Object.values(sections).forEach(sec => sec.style.display = 'none');
        section.style.display = 'block';
    }

    // Navigation logic
    Object.keys(navLinks).forEach(key => {
        document.getElementById(key).addEventListener('click', () => showSection(navLinks[key]));
    });

    // Employee Management
    const employeeTable = document.getElementById('employeeTable');
    document.getElementById('addEmployeeBtn').addEventListener('click', () => {
        const id = employeeTable.children.length + 1;
        const name = prompt("Enter employee name:");
        const email = prompt("Enter email:");
        const role = prompt("Enter role:");
        if (name && email && role) {
            employeeTable.innerHTML += `<tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${role}</td>
                <td><button class="btn btn-danger btn-sm">Remove</button></td>
            </tr>`;
        }
    });

    // Shift Scheduling
    document.getElementById('shiftForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const shiftTable = document.getElementById('shiftTable');
        const employee = document.getElementById('employeeName').value;
        const date = document.getElementById('shiftDate').value;
        const start = document.getElementById('shiftStart').value;
        const end = document.getElementById('shiftEnd').value;

        shiftTable.innerHTML += `<tr>
            <td>${employee}</td>
            <td>${date}</td>
            <td>${start}</td>
            <td>${end}</td>
        </tr>`;
    });

    // Leave Management
    document.getElementById('leaveForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const leaveTable = document.getElementById('leaveTable');
        const employee = document.getElementById('leaveEmployeeName').value;
        const start = document.getElementById('leaveStartDate').value;
        const end = document.getElementById('leaveEndDate').value;
        const type = document.getElementById('leaveType').value;

        leaveTable.innerHTML += `<tr>
            <td>${employee}</td>
            <td>${start}</td>
            <td>${end}</td>
            <td>${type}</td>
        </tr>`;
    });

    // Reporting (Using Chart.js)
    const ctx = document.getElementById('reportChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Employee 1', 'Employee 2', 'Employee 3'],
            datasets: [{
                label: 'Hours Worked',
                data: [40, 35, 30],
                backgroundColor: ['#4CAF50', '#2196F3', '#FF5722'],
            }]
        }
    });
});
