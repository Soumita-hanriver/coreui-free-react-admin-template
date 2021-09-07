import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Managers',
    to: '/admin/managers',
    icon: <CIcon name="cil-user" customClassName="nav-icon" />,
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  // {
  //   _tag: 'CNavItem',
  //   name: 'Managers',
  //   route: '/admin/managers',
  //   icon: <CIcon name="cil-user" customClassName="nav-icon" />,
  // },
  // {
  //   _component: 'CNavTitle',
  //   anchor: 'Theme',
  // },
  // {
  //   _component: 'CNavItem',
  //   as: NavLink,
  //   anchor: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon name="cil-drop" customClassName="nav-icon" />,
  // },
  // {
  //   _component: 'CNavItem',
  //   as: NavLink,
  //   anchor: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon name="cil-pencil" customClassName="nav-icon" />,
  // },
  // {
  //   _component: 'CNavTitle',
  //   anchor: 'Components',
  // },
  // {
  //   _component: 'CNavGroup',
  //   as: NavLink,
  //   anchor: 'Base',
  //   to: '/to',
  //   icon: <CIcon name="cil-puzzle" customClassName="nav-icon" />,
  //   items: [
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Accordion',
  //       to: '/base/accordion',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Cards',
  //       to: '/base/cards',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Carousel',
  //       to: '/base/carousels',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Collapse',
  //       to: '/base/collapses',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'List group',
  //       to: '/base/list-groups',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Navs & Tabs',
  //       to: '/base/navs',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Pagination',
  //       to: '/base/paginations',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Popovers',
  //       to: '/base/popovers',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Progress',
  //       to: '/base/progress',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Spinners',
  //       to: '/base/spinners',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Tables',
  //       to: '/base/tables',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   _component: 'CNavGroup',
  //   anchor: 'Buttons',
  //   icon: <CIcon name="cil-cursor" customClassName="nav-icon" />,
  //   items: [
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Dropdowns',
  //       to: '/buttons/dropdowns',
  //     },
  //   ],
  // },
  // {
  //   _component: 'CNavGroup',
  //   anchor: 'Forms',
  //   icon: <CIcon name="cil-notes" customClassName="nav-icon" />,
  //   items: [
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Form Control',
  //       to: '/forms/form-control',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Select',
  //       to: '/forms/select',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Checks & Radios',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Range',
  //       to: '/forms/range',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Input Group',
  //       to: '/forms/input-group',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Floating Labels',
  //       to: '/forms/floating-labels',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Layout',
  //       to: '/forms/layout',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Validation',
  //       to: '/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   _component: 'CNavItem',
  //   as: NavLink,
  //   anchor: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon name="cil-chart-pie" customClassName="nav-icon" />,
  // },
  // {
  //   _component: 'CNavGroup',
  //   anchor: 'Icons',
  //   icon: <CIcon name="cil-star" customClassName="nav-icon" />,
  //   items: [
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   _component: 'CNavGroup',
  //   anchor: 'Notifications',
  //   icon: <CIcon name="cil-bell" customClassName="nav-icon" />,
  //   items: [
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   _component: 'CNavItem',
  //   as: NavLink,
  //   anchor: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon name="cil-calculator" customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   _component: 'CNavTitle',
  //   anchor: 'Extras',
  // },
  // {
  //   _component: 'CNavGroup',
  //   anchor: 'Pages',
  //   icon: <CIcon name="cil-star" customClassName="nav-icon" />,
  //   items: [
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       _component: 'CNavItem',
  //       as: NavLink,
  //       anchor: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
]

export default _nav
