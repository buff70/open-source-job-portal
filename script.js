// Sample job data
const jobs = [
  {
    title: "Frontend Developer",
    company: "TechSoft",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Looking for a React.js frontend developer with 2+ years of experience."
  },
  {
    title: "Graphic Designer",
    company: "Creative Studio",
    location: "Mumbai, India",
    type: "Part-time",
    description: "Design social media posts and promotional materials."
  },
  {
    title: "Data Analyst Intern",
    company: "DataWiz",
    location: "Hyderabad, India",
    type: "Internship",
    description: "Analyze sales data using Excel and Python."
  },
  {
    title: "Backend Developer",
    company: "CloudCore",
    location: "Remote",
    type: "Full-time",
    description: "Node.js developer experienced with Express and MongoDB."
  }
];

const jobList = document.getElementById("jobList");
const searchInput = document.getElementById("searchInput");
const jobTypeFilter = document.getElementById("jobTypeFilter");

// Function to display jobs
function displayJobs(filteredJobs) {
  jobList.innerHTML = "";

  if (filteredJobs.length === 0) {
    jobList.innerHTML = "<p>No jobs found.</p>";
    return;
  }

  filteredJobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Type:</strong> ${job.type}</p>
      <p>${job.description}</p>
      <button class="apply-btn" onclick="applyJob('${job.title}')">Apply Now</button>
    `;

    jobList.appendChild(card);
  });
}

// Search and filter logic
function filterJobs() {
  const searchText = searchInput.value.toLowerCase();
  const selectedType = jobTypeFilter.value;

  const filtered = jobs.filter(job =>
    (job.title.toLowerCase().includes(searchText) ||
     job.company.toLowerCase().includes(searchText) ||
     job.location.toLowerCase().includes(searchText)) &&
    (selectedType === "" || job.type === selectedType)
  );

  displayJobs(filtered);
}

// Apply button action
function applyJob(jobTitle) {
  alert(`You have applied for the ${jobTitle} position!`);
}

// Event listeners
searchInput.addEventListener("input", filterJobs);
jobTypeFilter.addEventListener("change", filterJobs);

// Initial load
displayJobs(jobs);