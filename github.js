class Github {
  constructor() {
    this.client_id = '8fcb9c82d01c54fc084e';
    this.client_secret = '1d760b6cf9f9a53b2a2e0d5706d3fe14c3dba218';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';

  } 
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos 
    } //if profile: profile then you can shorten it

  }
}