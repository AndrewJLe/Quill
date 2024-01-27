import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';

export const appRouter = router({
    authCallback: publicProcedure.query(async () => {
        const { getUser } = getKindeServerSession()
        const user = await getUser()

        // If the user is not authenticated, throw an error
        if (!user || !user.id || !user.email) throw new TRPCError({ code: 'UNAUTHORIZED' })

        // Check if the user is in the database

        return { success: true }
    })
});

export type AppRouter = typeof appRouter;