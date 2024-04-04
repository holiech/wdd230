

const baseURL = "https://holiech.github.io/wdd230/";
const linksURL = "https://holiech.github.io/wdd230/data/links.json";


async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error("Error fetching links:", error);
  }
}


function displayLinks(weeks) {
  const activityList = document.querySelector("#activity-list");
  activityList.innerHTML = ""; 
  weeks.forEach(week => {
    const weekHeader = document.createElement("h3");
    weekHeader.textContent = week.week;
    activityList.appendChild(weekHeader);
    
    const activityLinks = document.createElement("ul");
    week.links.forEach(activity => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = activity.url;
      link.textContent = activity.title;
      listItem.appendChild(link);
      activityLinks.appendChild(listItem);
    });
    
    activityList.appendChild(activityLinks);
  });
}

getLinks();
