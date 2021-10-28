import HttpUtil from 'common/utils/HttpUtil';

export const getItems = () => {
  const request = {
    url: '/items',
    method: 'GET',
    data: {},
  };

  return HttpUtil.makeRequest(request);
};

export const getCompanies = () => {
  const request = {
    url: '/companies',
    method: 'GET',
    data: {},
  };

  return HttpUtil.makeRequest(request);
};
