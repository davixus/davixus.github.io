import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://davixus.github.io',
  integrations: [
    starlight({
      title: 'Small Questions, Clear Answers',
      description: 'Short explainers about science, computing, and sport.',
      sidebar: [
        {
          label: 'The collection',
          items: [
            { label: 'Start here', slug: 'index' },
            { label: 'Why is the sky blue?', slug: 'why-is-the-sky-blue' },
            { label: 'Understanding memory latency', slug: 'memory-latency' },
            { label: 'Softball HLP vs. a traditional swing', slug: 'softball-hlp-vs-traditional-batter' },
          ],
        },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/davixus/davixus.github.io' },
      ],
    }),
  ],
});
