import { component$, getLocale, Slot, useStyles$ } from '@builder.io/qwik';
import { RequestHandler, routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';

import styles from './styles.css?inline';

export const useServerTimeLoader = routeLoader$(({ locale }) => {
  console.log(`routeLoader locale(): ${locale()}`);
  // error: Reading `locale` outside of context.
  // console.log(`routeLoader getLocale(): ${getLocale()}`);
  console.log(`routeLoader getLocale(): ${getLocale('en')}`);
});
export const onRequest: RequestHandler = async ({ locale, request }) => {
  console.log(`onRequest setting locale to ja`);
  locale('ja');
  // error: Reading `locale` outside of context.
  // console.log(`onRequest getLocale(): ${getLocale()}`);
  console.log(`onRequest getLocale(): ${getLocale('en')}`);
};

export default component$(() => {
  useStyles$(styles);
  console.log(`component getLocale(): ${getLocale()}`);
  return (
    <>
      <Header></Header>
      <main>component getLocale(): {getLocale()}</main>
    </>
  );
});
