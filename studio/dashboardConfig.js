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
                  buildHookId: '5ec89c6245228a00fc799755',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink4-studio',
                  apiId: 'c07c4d95-0af6-484b-b364-cfd8a7ba64be'
                },
                {
                  buildHookId: '5ec89c6245228a24de79933d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink4',
                  apiId: '046b1293-a254-4fb3-a122-972a93782e3c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-kitchen-sink4',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink4.netlify.app', category: 'apps'}
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
