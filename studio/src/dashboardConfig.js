export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8bd8ff3437675e1d72548e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-gvz45rgw',
                  apiId: '99d47818-a264-413e-b604-64a76ae1705c'
                },
                {
                  buildHookId: '5f8bd8ff1c1ede5ea4b77a03',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ktrsdux7',
                  apiId: '13352c09-b0f5-42d7-a7a0-4cfc94eb6cf3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paulbrycki/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ktrsdux7.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
