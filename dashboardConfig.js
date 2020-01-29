export default {
  widgets: [
    {
      name: 'project-info',
    },
    {
      name: 'project-users',
    },
    {
      name: 'notes',
      layout: {
        width: 'medium',
      },
    },
    {
      name: 'google-analytics',
      layout: {
        width: 'large',
      },
      options: {
        title: 'Last 30 days',
        gaConfig: {
          reportType: 'ga',
          query: {
            dimensions: 'ga:date',
            metrics: 'ga:users, ga:sessions, ga:newUsers',
            'start-date': '30daysAgo',
            'end-date': 'yesterday',
          },
          chart: {
            type: 'LINE',
            options: {
              width: '100%',
            },
          },
        },
      },
    },
    {
      name: 'google-analytics',
      layout: {
        width: 'medium',
      },
      options: {
        title: 'World map',
        gaConfig: {
          reportType: 'ga',
          query: {
            dimensions: 'ga:country',
            metrics: 'ga:users',
            'start-date': '30daysAgo',
            'end-date': 'yesterday',
          },
          chart: {
            type: 'GEO',
            width: '100%',
          },
        },
      },
    },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiId: 'a9e2940b-6c47-488b-952d-d78239391bfc',
            buildHookId: '5e12e870c61b630d14c028b4',
            name: '6in',
          },
        ],
      },
    },
  ],
};
