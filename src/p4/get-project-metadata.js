import {CannotAccessProjectError} from '../common/errors';
import request from '../common/request';

const getProjectMetadata = async (id) => {
  try {
    const meta = await request({
      url: [
        // Hopefully one of these URLs won't be blocked.
        `https://projects.Blox.site/api/projects/getPublished?id=${id}`,
        `https://projects.Blox.site/api/projects/getPublished?id=${id}`
      ],
      type: 'json'
    });
    return {
      title: meta.name
    };
  } catch (e) {
    if (e && e.status === 404) {
      throw new CannotAccessProjectError(`Cannot access project ${id}`);
    }
    throw e;
  }
};

export default getProjectMetadata;
