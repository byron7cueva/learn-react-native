class Http {
  static instance = new Http();

  async get(url) {
    try {
      const req = await fetch(url);
      const json = await req.json();
      return json;
    } catch (err) {
      console.log('http get method err', err);
      throw new Error(err);
    }
  }

  async post(url, body) {
    try {
      const req = await fetch(url, {
        method: 'POST',
        body,
      });
      const json = req.json();
      return json;
    } catch (err) {
      console.log('http post method err', err);
      throw new Error(err);
    }
  }

  async delete(url, id) {
    try {
      const req = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });
      const json = req.json();
      return json;
    } catch (err) {
      console.log('http post method err', err);
      throw new Error(err);
    }
  }

  async put(url, id, body) {
    try {
      const req = await fetch(`${url}/${id}`, {
        method: 'PUT',
        body,
      });
      const json = req.json();
      return json;
    } catch (err) {
      console.log('http post method err', err);
      throw new Error(err);
    }
  }
}

export default Http;
