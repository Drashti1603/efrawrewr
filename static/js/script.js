document.addEventListener("DOMContentLoaded", function() {
  // Function to handle the form submission for Daily Expense Entry
  const handleExpenseForm = () => {
      const form = document.getElementById("expense-form");
      if (form) {
          form.addEventListener("submit", function(event) {
              event.preventDefault(); // Prevent the default form submission
              
              // Create a FormData object from the form
              const formData = new FormData(form);
              
              fetch("/daily-expense", {
                  method: "POST",
                  body: formData
              })
              .then(response => response.json())
              .then(data => {
                  alert(data.response); // Show the message
                  form.reset(); // Reset the form
              })
              .catch(error => console.error('Error:', error));
          });
      }
  };

  // Function to handle the form submission for Document Scanning
  const handleDocumentForm = () => {
      const form = document.getElementById("document-form");
      if (form) {
          form.addEventListener("submit", function(event) {
              event.preventDefault(); // Prevent the default form submission
              
              const panNumber = document.getElementById("pan-number").value;
              const documentFile = document.getElementById("document-file").files[0];
              
              const formData = new FormData();
              formData.append("pan_number", panNumber);
              formData.append("document_file", documentFile);
              
              fetch("/document-scan", {
                  method: "POST",
                  body: formData
              })
              .then(response => response.json())
              .then(data => {
                  alert(data.response); // Show the message
                  form.reset(); // Reset the form
              })
              .catch(error => console.error('Error:', error));
          });
      }
  };

  // Function to handle the form submission for Call Log Backup
  const handleCallLogForm = () => {
      const form = document.getElementById("call-log-form");
      if (form) {
          form.addEventListener("submit", function(event) {
              event.preventDefault(); // Prevent the default form submission
              
              const callLogFile = document.getElementById("call-log-file").files[0];
              
              const formData = new FormData();
              formData.append("call_log_file", callLogFile);
              
              fetch("/call-log", {
                  method: "POST",
                  body: formData
              })
              .then(response => response.json())
              .then(data => {
                  alert(data.response); // Show the message
                  form.reset(); // Reset the form
              })
              .catch(error => console.error('Error:', error));
          });
      }
  };

  // Function to handle the form submission for Reports
  const handleReportsForm = () => {
      const form = document.getElementById("reports-form");
      if (form) {
          form.addEventListener("submit", function(event) {
              event.preventDefault(); // Prevent the default form submission
              
              const reportType = document.getElementById("report-type").value;
              
              const formData = new FormData();
              formData.append("report_type", reportType);
              
              fetch("/reports", {
                  method: "POST",
                  body: formData
              })
              .then(response => response.json())
              .then(data => {
                  alert(data.response); // Show the message
                  form.reset(); // Reset the form
              })
              .catch(error => console.error('Error:', error));
          });
      }
  };

  // Initialize the handlers for each form
  handleExpenseForm();
  handleDocumentForm();
  handleCallLogForm();
  handleReportsForm();
});
