function plugin(hook, vm) {
    hook.beforeEach(function(content) {
      var match = content.match(/- Bilibili video((?:\n- .*)+)/);
      if (match) {
        var lines = match[1].split('\r\n');
        lines.shift(); // delete first elem
        var videos = lines.map(function(line) {
          line = '<div style="width: 600px; height: 400px;flex-grow: 0;min-width: 100px;margin: 10px;"><iframe src="//player.bilibili.com/player.html?' + line.slice(2).trim() +
          '&autoplay=0" style="width: 100%; height: 100%;" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe></div>';
          return line;
        });
        new_content = '<div style="display: flex;flex-wrap: wrap; justify-content: flex-start; align-items: stretch; ">' + videos.join("") + '</div>';
        content = content.replace(match[0], new_content);
      }
      return content;
    });
  }
  
  window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);