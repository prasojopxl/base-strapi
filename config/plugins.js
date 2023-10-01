module.exports = ({ env }) => ({
    // ...
    // sample: http://localhost:1337/api/slugify/slugs/test/judul2
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
            test: {
                field: 'slug',
                references: 'title',
            },
        },
      },
    },
    // ...
  });