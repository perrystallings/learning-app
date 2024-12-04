import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AccountRoot from '@/components/AccountRoot/AccountRoot';
import UserRoot from '@/components/UserRoot/UserRoot';
import AccountListPage from '@/pages/AccountList.page';
import AccountOverviewPage from '@/pages/AccountOverview.page';
import RedirectPage from '@/pages/Redirect.page';
import HomePage from './pages/Home.page';
import SignupPage from "@/pages/Signup.page";
import {AccountContextProvider} from "@/contexts/Account.context";
import {UserContextProvider} from "@/contexts/User.context";
import SettingsPage from "@/pages/Settings.page";

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserContextProvider><UserRoot /></UserContextProvider>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'accounts',
        children: [
          {
            index: true,
            element: <AccountListPage />,
          },
          {
            path: ':accountId',
            element: <AccountContextProvider><AccountRoot /></AccountContextProvider>,
            children: [
              {
                index: true,
                element: <AccountOverviewPage />,
              },
            ],
          },
          {
            path: '*',
            element: <RedirectPage path="/accounts" />,
          },
        ],
      },
      {
        path: "settings",
        element: <SettingsPage/>
      }
    ]
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/*',
    element: <RedirectPage path="/" />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
