const CompanyCreate = () => import('../../../pages/companies/Create.vue');

export default {
    name: 'administration.companies.create',
    path: 'create',
    component: CompanyCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Company',
    },
};
