<template>
    <div class="columns is-centered">
        <div class="column is-three-quarters is-full-touch">
            <enso-form class="box"
                ref="form">
                <template #mandatary="props">
                    <form-field v-bind="props"
                        :pivot-params="pivotParams"/>
                </template>
                <template #actions-left>
                    <action tag="a"
                        :button="{
                            class: 'is-dark',
                            icon: faUserTie,
                            label: 'Person',
                        }"
                        @click="createPerson"
                        v-if="canAccess('administration.people.create')"/>
                </template>
            </enso-form>
            <accessories>
                <template #default="{ count }">
                    <tab keep-alive
                        id="People">
                        <div class="columns is-centered">
                            <div class="column is-two-thirds">
                                <people :id="companyId"
                                    @update="updatePeople(count)"
                                    @remove="personRemoved"
                                    ref="peopleRef"/>
                            </div>
                        </div>
                    </tab>
                    <tab keep-alive
                        id="Addresses">
                        <div class="columns is-centered">
                            <div class="column is-two-thirds">
                                <addresses :id="companyId"
                                    type="company"
                                    @update="updateAddresses(count)"
                                    ref="addressesRef"/>
                            </div>
                        </div>
                    </tab>
                    <tab keep-alive
                        id="Comments">
                        <div class="columns is-centered">
                            <div class="column is-two-thirds">
                                <comments :id="companyId"
                                    type="company"
                                    @update="updateComments(count)"
                                    ref="commentsRef"/>
                            </div>
                        </div>
                    </tab>
                    <tab keep-alive
                        id="Documents">
                        <div class="columns is-centered">
                            <div class="column is-two-thirds">
                                <documents :id="companyId"
                                    type="company"
                                    @update="updateDocuments(count)"
                                    ref="documentsRef"/>
                            </div>
                        </div>
                    </tab>
                </template>
            </accessories>
        </div>
    </div>
</template>

<script setup>
import { inject, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Tab } from '@enso-ui/tabs/bulma';
import Accessories from '@enso-ui/accessories/bulma';
import { Addresses } from '@enso-ui/addresses/bulma';
import { EnsoForm, FormField, Action } from '@enso-ui/forms/bulma';
import People from './components/People.vue';
import { Comments } from '@enso-ui/comments/bulma';
import { Documents } from '@enso-ui/documents/bulma';

const canAccess = inject('canAccess');
const routerErrorHandler = inject('routerErrorHandler');

const route = useRoute();
const router = useRouter();

const form = ref(null);
const peopleRef = ref(null);
const addressesRef = ref(null);
const commentsRef = ref(null);
const documentsRef = ref(null);

const companyId = computed(() => Number.parseInt(route.params.company, 10));

const pivotParams = computed(() => ({
    companies: { id: companyId.value },
}));

const createPerson = () => router.push({
    name: 'administration.people.create',
    params: route.params,
}).catch(routerErrorHandler);

const updatePeople = count => {
    count.People = peopleRef.value.count;
};

const updateAddresses = count => {
    count.Addresses = addressesRef.value.count;
};

const updateComments = count => {
    count.Comments = commentsRef.value.count;
};

const updateDocuments = count => {
    count.Documents = documentsRef.value.count;
};

const personRemoved = personId => {
    if (form.value.field('mandatary').value === personId) {
        form.value.field('mandatary').value = null;
    }
};
</script>
