export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Dashboard',
        icon: 'mdi-account-supervisor-circle',
        to: '/'
    },
    { header: 'utilities' },
    {
        title: 'Typography',
        icon: 'mdi-account-supervisor-circle',
        to: '/ui/typography'
    },
    {
        title: 'Shadow',
        icon: 'mdi-account-supervisor-circle',
        to: '/ui/shadow'
    },
    { header: 'auth' },
    {
        title: 'Login',
        icon: 'mdi-account-supervisor-circle',
        to: '/auth/login'
    },
    {
        title: 'Register',
        icon: 'mdi-account-supervisor-circle',
        to: '/auth/register'
    },
    { header: 'Extra' },
    {
        title: 'Icons',
        icon: 'mdi-account-supervisor-circle',
        to: '/icons'
    },
    {
        title: 'Sample Page',
        icon: 'mdi-account-supervisor-circle',
        to: '/sample-page'
    },
];

export default sidebarItem;
