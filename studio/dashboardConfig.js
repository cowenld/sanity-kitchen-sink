export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '61d57ed4c542230ed32832e8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kyt2sku6',
                  apiId: 'e88a3ab7-711d-4f13-bc5a-045f56d402d5'
                },
                {
                  buildHookId: '61d57ed4e9cb5a15b526b7da',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wg118fqo',
                  apiId: 'c0e90729-7401-48a5-8619-3434baec1b1e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cowenld/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wg118fqo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
