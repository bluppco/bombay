import { z, defineCollection } from "astro:content"

const headerCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		slug: z.string(),
		order: z.number(),
		has_dropdown: z.boolean(),
		items: z.array({

			title: z.string(),
			slug: z.string(),
			order: z.number(),

		})

	})

})

export const collections = {

	// "header": headerCollection

}
