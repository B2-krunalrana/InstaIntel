document.getElementById("fetchData").addEventListener("click", async function () {
    const username = document.getElementById("username").value.trim();
    if (!username) {
      alert("Please enter an Instagram username");
      return;
    }
  
    const url = `https://www.instagram.com/${username}/?__a=1&__d=dis`; // Instagram public API (might require workarounds)
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Profile not found or API restricted");
  
      const data = await response.json();
      const userData = data.graphql.user;
  
      document.getElementById("results").innerHTML = `
        <h2>@${userData.username}</h2>
        <img src="${userData.profile_pic_url_hd}" width="100">
        <p><strong>Followers:</strong> ${userData.edge_followed_by.count}</p>
        <p><strong>Following:</strong> ${userData.edge_follow.count}</p>
        <p><strong>Posts:</strong> ${userData.edge_owner_to_timeline_media.count}</p>
      `;
    } catch (error) {
      document.getElementById("results").innerHTML = `<p>Error fetching data</p>`;
    }
  });
  