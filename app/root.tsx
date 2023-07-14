import type { V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { AuthBindings, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, {
  UnsavedChangesNotifier,
} from "@refinedev/remix-router";

import dataProvider from "@refinedev/simple-rest";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import styles from "~/global.css";
import { authenticator } from "~/utils/auth.server";

const API_URL = "https://api.fake-rest.refine.dev";

export const meta: V2_MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Refine" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: "Refine is a React-based framework for building data-intensive applications in no time ✨" },
  ]
};


export default function App() {
  const { profile, to } = useLoaderData<typeof loader>();
  const authProvider: AuthBindings = {
    login: async ({ providerName }) => {
      if (providerName) {
        window.location.href = `/auth/${providerName} ? to = ${to}`;
        return {
          success: true,
        };
      }

      return {
        success: true,
        redirectTo: "/",
      };
    },
    logout: async () => {
      window.location.href = "/auth/logout";
      return {
        success: true,
      };
    },
    onError: async (error) => {
      console.error(error);
      return {
        error,
      };
    },
    check: async () => {
      return {
        authenticated: !!profile,
      };
    },
    getPermissions: async () => {
      return null;
    },
    getIdentity: async () => {
      if (profile) {
        return profile;
      }

      return null;
    },
  };

  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-white shadow dark:bg-dark-800">
        <RefineKbarProvider>
          <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider(API_URL)}
            authProvider={authProvider}
            resources={[
              {
                name: "blog_posts",
                list: "/blog-posts",
                create: "/blog-posts/create",
                edit: "/blog-posts/edit/:id",
                show: "/blog-posts/show/:id",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "categories",
                list: "/categories",
                create: "/categories/create",
                edit: "/categories/edit/:id",
                show: "/categories/show/:id",
                meta: {
                  canDelete: true,
                },
              },
            ]}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
            }}
          >
            <>
              <Outlet />
              <UnsavedChangesNotifier />
              <RefineKbar />
            </>
          </Refine>
        </RefineKbarProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const loader = async ({ request }: LoaderArgs) => {
  const profile = await authenticator.isAuthenticated(request);
  const to = new URL(request.url).searchParams.get("to");
  return json({ profile, to });
};
