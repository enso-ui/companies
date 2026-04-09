<template>
    <div class="box p-3"
        @mouseover="controls = true"
        @mouseleave="controls = false">
        <p class="title is-5">
            {{ person.name }}
            <span class="is-pulled-right is-flex"
                v-if="controls">
                <a class="button is-naked is-small"
                    @click="$emit('edit')">
                    <span class="icon">
                        <fa :icon="faPen"/>
                    </span>
                </a>
                <a class="button is-naked is-small"
                    @click="$emit('delete')">
                    <span class="icon">
                        <fa :icon="faTrashCan"/>
                    </span>
                </a>
            </span>
        </p>
        <p class="subtitle is-6">
            {{ person.position }}
        </p>
        <p v-if="person.email">
            {{ person.email }}
        </p>
        <p v-if="person.phone">
            {{ person.phone }}
        </p>
    </div>
</template>

<script>
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default {
    name: 'Person',

    components: { Fa },

    inject: ['canAccess'],

    props: {
        person: {
            type: Object,
            required: true,
        },
    },

    emits: ['delete', 'edit'],

    data: () => ({
        controls: false,
        faPen,
        faTrashCan,
    }),
};
</script>
