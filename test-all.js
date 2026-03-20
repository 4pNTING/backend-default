const http = require('http');

async function graphqlRequest(query, variables = {}) {
  const data = JSON.stringify({ query, variables });
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api-gateway',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  return new Promise((resolve, reject) => {
    const req = http.request(options, res => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => resolve({ status: res.statusCode, body: JSON.parse(body) }));
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function runTests() {
  console.log('--- STARTING GQL TESTS ---');

  // 1. Create Zone
  const createZoneRes = await graphqlRequest(`
    mutation {
      createZone(input: { name: "Test Zone 1" }) {
        zone { _id, name }
      }
    }
  `);
  console.log('Create Zone Response:', JSON.stringify(createZoneRes.body));
  const zoneId = createZoneRes.body?.data?.createZone?.zone?._id;
  if (!zoneId) throw new Error('Failed to create zone or get _id');

  // 2. Update Zone
  const updateZoneRes = await graphqlRequest(`
    mutation($id: String!) {
      updateZone(input: { _id: $id, name: "Test Zone 1 Updated" }) {
        zone { _id, name }
      }
    }`, { id: zoneId });
  console.log('Update Zone Response:', JSON.stringify(updateZoneRes.body));

  // 3. Load Category (Should be empty but valid)
  const loadCategoryRes = await graphqlRequest(`
    query {
      loadCategory(input: { limit: 10 }) {
        count
        category { _id, name }
      }
    }
  `);
  console.log('Load Category Response:', JSON.stringify(loadCategoryRes.body));

  // 4. Create Category
  const createCategoryRes = await graphqlRequest(`
    mutation {
      createCategory(input: { name: "Test Category 1", description: "Desc" }) {
        category { _id, name }
      }
    }
  `);
  console.log('Create Category Response:', JSON.stringify(createCategoryRes.body));
  const categoryId = createCategoryRes.body?.data?.createCategory?.category?._id;

  // 5. Delete Zone
  const deleteZoneRes = await graphqlRequest(`
    mutation($id: String!) {
      deleteZone(input: { _id: $id }) {
        zone { _id }
      }
    }`, { id: zoneId });
  console.log('Delete Zone Response:', JSON.stringify(deleteZoneRes.body));

  console.log('--- TESTS COMPLETED ---');
}

runTests().catch(err => console.error('TEST FAILED:', err));
