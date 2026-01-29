interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'My Running Journey',
  siteUrl: 'https://gyeongchan-jang.github.io/running_page/',
  logo: 'https://avatars.githubusercontent.com/u/90392240?s=400&u=b007eb0edf041aef8033678368a727972d389f72&v=4',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://velog.io/@zerone/posts',
    },
    {
      name: 'About',
      url: 'https://github.com/GyeongChan-Jang/running_page',
    },
  ],
};

export default data;
