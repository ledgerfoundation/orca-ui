/* eslint-disable */
import 'mobx-react-lite/batchingForReactDom';
import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { pageview, GA_TRACKING_ID } from '../utils/gtag';
import theme from '../config/theme';
import { Notifications } from '../components/Notifications';
import { AppStore, AppStoreProvider } from '../store';
import 'cropperjs/dist/cropper.css';

const appStore = new AppStore();
const createAppStore = () => appStore;

export const App = observer(({ Component, pageProps }) => {
  React.useEffect(() => {
    appStore.authStore.authenticate();
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  React.useEffect(() => {
    const handleRouteChange = url => {
      pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <title>Orca Protocol</title>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
            `,
            }}
          />
          {!process.env.NEXT_PUBLIC_DEVELOPMENT_MODE && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window['_fs_debug'] = false;
            window['_fs_host'] = 'fullstory.com';
            window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
            window['_fs_org'] = 'XHNH5';
            window['_fs_namespace'] = 'FS';
            (function(m,n,e,t,l,o,g,y){
                if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
                g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
                o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
                y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
                g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
                g.anonymize=function(){g.identify(!!0)};
                g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
                g.log = function(a,b){g("log",[a,b])};
                g.consent=function(a){g("consent",!arguments.length||a)};
                g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
                g.clearUserCookie=function(){};
                g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
                if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
                g._v="1.2.0";
            })(window,document,window['_fs_namespace'],'script','user');
            `,
              }}
            />
          )}
        </Head>

        <AppStoreProvider createAppStore={createAppStore}>
          <Component {...pageProps} />
          <Notifications />
        </AppStoreProvider>
      </ThemeProvider>
    </>
  );
});

export default App;
