import {
  mdiHome,
  mdiFilterVariant,
  mdiAccountSearch,
  mdiShopping,
  mdiPhone,
  mdiPhoneReturn,
  mdiLink,
  mdiCellphoneMessage,
  mdiMapMarker,
  mdiLibraryBooks,
  mdiMagnify,
  mdiForum,
  mdiSettings,
  mdiArrowUpThick,
  mdiSortVariant,
  mdiViewList,
  mdiHelpCircle,
  mdiCalendarText,
  mdiBackupRestore,
  mdiClose
  //mdiViewGrid,
  //mdiViewModule
 } from '@mdi/js'

import './siteo.js';

export default {

    'si-home': mdiHome,   // main link
    'si-services': mdiViewList, // link for services
    'si-places': mdiMapMarker, // link for subjects
    'si-experts': mdiAccountSearch,
    'si-blog': mdiLibraryBooks,

    'si-search': mdiMagnify,
    'si-qa': mdiForum,
    'si-settings': mdiSettings,
    'si-arrow-down': '',
    'si-arrow-up': mdiArrowUpThick,
    'si-arrow-left': '',
    'si-arrow-right': '',
    'si-sort': mdiSortVariant,
    'si-filter':   mdiFilterVariant,
    'si-help': mdiHelpCircle,
    'si-events':mdiCalendarText,
    'si-clear': mdiBackupRestore,
    'si-close':mdiClose,
    // icons for actions
    'si-order': mdiShopping,
    'si-call': mdiPhone,
    'si-recall': mdiPhoneReturn,
    'si-messagers': mdiCellphoneMessage,
    'si-link': mdiLink,



    //'si-grid-1': mdiViewList,
    //'si-grid-2': mdiViewGrid,
    //'si-grid-3': mdiViewModule,



};
