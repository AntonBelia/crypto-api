import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { integer } from '@keystone-6/core/fields';

import {
  text,
  relationship,
  password,
  timestamp,
} from '@keystone-6/core/fields';


import type { Lists } from '.keystone/types';

export const lists: Lists = {
  Player: list({
    access: allowAll, 

    fields: {
      name: text({ validation: { isRequired: true } }), 
      wins: integer({ validation: { isRequired: true } }), 
      avatarUrl: text({ validation: { isRequired: true } }), 
    },
  }),

  User: list({
    access: allowAll,

    fields: {
      name: text({ validation: { isRequired: true } }),

      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
      }),

      password: password({ validation: { isRequired: true } }),

      createdAt: timestamp({
        defaultValue: { kind: 'now' },
      }),
    },
  }),

};
