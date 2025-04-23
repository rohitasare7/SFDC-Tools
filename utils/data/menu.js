import { BoltIcon, SparklesIcon, SwatchIcon, CloudIcon, CommandLineIcon, Square3Stack3DIcon, CodeBracketSquareIcon } from '@heroicons/vue/24/outline';
import CommaIconVue from '~/components/icons/CommaIcon.vue.vue';
import JSONIcon from '~/components/icons/JSONIcon.vue';

export default ({
    navItems: [
        {
            route: '/dashboard', active: false, name: 'Salesforce Tools', icon: CloudIcon, children: [
                { route: '/tools/comma-inserter', active: false, name: 'Comma Inserter', children: [], icon : CommaIconVue },
                { route: '/tools/json-to-apex', active: false, name: 'JSON to Apex', children: [], icon : JSONIcon },
                { route: '/tools/faker', active: false, name: 'Faker', children: [], icon : SparklesIcon},
                { route: '/tools/omniscript-input-helper', active: false, name: 'OmniScript Helper', children: [], icon : Square3Stack3DIcon},
                { route: '/tools/debug-log-parser', active: false, name: 'Debug Log Parser', children: [], icon : CodeBracketSquareIcon},
                { route: '/availableAPIs', active: false, name: 'Available APIs', children: [], icon : CommandLineIcon },

            ]
        },
        {
            route: '/dashboard', active: false, name: 'AI Tools', icon: BoltIcon, children: [
                { route: '/tools/googleGemini', active: false, name: 'Google Gemini', children: [], icon : SparklesIcon },
            ]
        },
        {
            route: '/dashboard', active: false, name: 'JSON Tools', icon: SwatchIcon, children: [
                {route: '/tools/json/formatter', active: false, name: 'Beautifier / Minifier', children: [], },
                { route: '/tools/json/schema', active: false, name: 'Schema Generator', children: [],  },
                { route: '/tools/googleGemini', active: false, name: 'JSON Validator', children: [], },
                { route: '/tools/googleGemini', active: false, name: 'JSON to Apex', children: [],  },
            ]
        },
        
        // { route: '/api/test', active: false, name: 'Test API', children: [], icon : SquaresPlusIcon },

    ],
});
