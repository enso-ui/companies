<template>
    <modal class="person-modal">
        <enso-form class="box"
            v-bind="$attrs"
            disable-state
            @ready="init">
            <template #actions-left
                v-if="id">
                 <action tag="a"
                    :button="{
                        class: 'is-dark',
                        icon: faUserTie,
                        label: 'Edit Person',
                    }"
                    @click="emit('edit-person', id)"/>
            </template>
        </enso-form>
    </modal>
</template>

<script setup>
import { ref } from 'vue';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '@enso-ui/modal/bulma';
import { EnsoForm, Action } from '@enso-ui/forms/bulma';

const props = defineProps({
    companyId: {
        type: Number,
        required: true,
    },
});

const emit = defineEmits(['edit-person']);
const id = ref(null);

const init = ({ form }) => {
    id.value = form.field('id').value;
    form.field('company_id').value = props.companyId;
};
</script>

<style lang="scss">
.person-modal {
    .modal-content {
        overflow: unset;
    }

    @media screen and (max-width: 1023px) {
        .modal-content {
            width: 95%;
        }
    }
}
</style>
