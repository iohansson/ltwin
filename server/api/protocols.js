export default defineEventHandler((event) => {
  const { protocolsAccessToken, protocolsPageSize } = useRuntimeConfig();
  const { page } = useQuery(event);
  console.log('protocols', protocolsPageSize, page);
  return $fetch('https://www.protocols.io/api/v3/protocols', {
    headers: {
      Authentication: `Bearer ${protocolsAccessToken}`,
    },
    params: {
      page_size: protocolsPageSize,
      ...(page ? { page_id: page } : {}),
    },
  });
});
