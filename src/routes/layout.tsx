import {
  $,
  component$,
  getLocale,
  Slot,
  useOnDocument,
  useStyles$,
} from '@builder.io/qwik';
import { Link, RequestHandler, routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';

import styles from './styles.css?inline';
import { register } from 'swiper/element/bundle';
register();
const swiperRegister = () => {
  register();
};
// export const useServerTimeLoader = routeLoader$(({ locale }) => {
//   console.log(`routeLoader locale(): ${locale()}`);
//   // error: Reading `locale` outside of context.
//   // console.log(`routeLoader getLocale(): ${getLocale()}`);
//   console.log(`routeLoader getLocale(): ${getLocale('en')}`);
// });
// export const onRequest: RequestHandler = async ({ locale, request }) => {
//   console.log(`onRequest setting locale to ja`);
//   locale('ja');
//   // error: Reading `locale` outside of context.
//   // console.log(`onRequest getLocale(): ${getLocale()}`);
//   console.log(`onRequest getLocale(): ${getLocale('en')}`);
// };

export default component$(() => {
  // useStyles$(styles);
  // console.log(`component getLocale(): ${getLocale()}`);
  useOnDocument('qinit', $(swiperRegister));
  return (
    <>
      <Header></Header>
      {/* <main>component: ${getLocale()}</main> */}
      <swiper-container>
        <swiper-slide>
          <img src="https://placehold.jp/150x150.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://placehold.jp/150x150.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://placehold.jp/150x150.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://placehold.jp/150x150.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://placehold.jp/150x150.png" />
        </swiper-slide>
        ...
      </swiper-container>
    </>
  );
});
