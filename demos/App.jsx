import React from 'react';
import Fork from 'react-ghfork';

import FullTable from './full_table';
import FullTableMultipleFilters from './full_table_multiple_filters';
import EditorsTable from './editors_table';
import NestedTable from './nested_table';

import readme from '../README.md';

const App = () => (
    <div className='pure-g'>
        <Fork className='right' project='bebraw/reactabular' />
        <header className='pure-u-1'>
            <h1>Reactabular</h1>

            <div className='description'>Spectacular tables for React.js</div>
        </header>
        <article className='pure-u-1'>
            <section className='demonstration'>
                <div className='description'>
                    <h2>Demonstration</h2>

                    <p>The demo below shows basic features of Reactabular. Besides usual pagination, sorting and filtering by search it is possible to modify various fields by clicking them. In addition you may edit rows by hitting the arrow at the end of each. `x` will remove the row in question.</p>

                    <p>Most of this functionality is optional and has been plugged on top of a small core. The rest is just basic React.js code.</p>

                    <p>There are hooks for connecting with data stores (ie. Flux architecture) and the library has been developed with extensibility in mind. Ideally you shouldn't have to modify the library itself to get something done.</p>
                </div>

                <FullTable />
            </section>
            <section className="multiple-filters">
              <div className='description'>
                  <h2>Multiple filters</h2>

                  <p>The table below is identical to the example above with the exception that there is a filter for each column of data.</p>

                  <p>This provides the flexibility to search across multiple columns using different filters.</p>
              </div>

              <FullTableMultipleFilters />
            </section>
            <section className='editors'>
                <div className='description'>
                    <h2>Editors</h2>

                    <p>The table below contains some sample editors you can use. It is possible to develop your own editors as long as you follow the same interface (`value`, `onValue` props).</p>
                </div>

                <EditorsTable />
            </section>
            <section>
                <div className='description'>
                    <h2>Nested table</h2>

                    <p>The table below contains some nested data.</p>
                </div>

                <NestedTable />
            </section>
            <section className='documentation'>
                <h2>README</h2>

                <div dangerouslySetInnerHTML={{__html: readme}}></div>
            </section>
        </article>
    </div>
);

export default App;
