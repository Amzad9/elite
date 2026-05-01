# Run the Old WordPress Site Locally

Your backup is in **All-in-One WP Migration** format (`.wpress`). To run it locally you need: (1) a local WordPress install, and (2) the same plugin to import the backup.

---

## Option A: Local by Flywheel (Easiest on Mac)

1. **Download Local**  
   https://localwp.com/ — free.

2. **Create a new site**
   - Open Local → **+ Create a new site**
   - Name it (e.g. `elitecardprocessing`)
   - Choose **Preferred** environment, create admin user/password, finish.

3. **Install All-in-One WP Migration**
   - In Local, click **WP Admin** to open WordPress.
   - Go to **Plugins → Add New**, search **All-in-One WP Migration**, install and activate.

4. **Import your backup**
   - In WordPress: **All-in-One WP Migration → Import**
   - Click **Import from** → **File**
   - Choose:  
     `elitecardprocessing-com-20260206-101323-zfknrfvmjlla.wpress`  
     (from your project folder)
   - Wait for the import to finish (the file is large, so it can take several minutes).
   - When prompted, **log in again** with the admin user you created in step 2 (the backup may have overwritten users).

5. **Open the site**
   - In Local, click **Open site** (or the site URL). You’re now running the old WordPress site locally.

---

## Fixing the 300MB / 512MB import limit (Local)

The import limit comes from **PHP’s upload limits** (and WordPress’s `wp_max_upload_size()`). Plugin **v7.x** no longer uses a constant in `constants.php` — it uses whatever WordPress reports. Your backup is ~1.3 GB, so raise the limit to at least 2 GB.

### Step 1: Raise PHP upload limits in Local

1. In **Local**, right‑click your site → **Reveal in Finder**.
2. In the site folder, go to **`app/conf/php/`**.
3. Open **`php.ini.hbs`** in a text editor.
4. Find or add these lines (set to 2G so your ~1.3 GB file fits):
   ```ini
   upload_max_filesize = 2G
   post_max_size = 2G
   memory_limit = 512M
   ```
5. Save the file.
6. In **Local**, **stop** the site, then **start** it again so the new PHP settings apply.

### Step 2: Import again

- In WordPress go to **All-in-One WP Migration → Import → File** and choose your `.wpress` file again. The plugin uses WordPress’s max upload size, so once PHP allows 2G, the “only 300MB allowed” message should disappear.

### If it still shows a low limit

Add this to your site’s **`wp-config.php`** (before the line that says “That’s all, stop editing!”) to force a higher limit:

```php
@ini_set( 'upload_max_filesize', '2G' );
@ini_set( 'post_max_size', '2G' );
```

Or use WordPress’s filter by adding to **`wp-content/mu-plugins/upload-limit.php`** (create the file and the `mu-plugins` folder if needed):

```php
<?php
add_filter( 'upload_size_limit', function() { return 2 * 1024 * 1024 * 1024; }, 999 );
```

### About “Restore” and the Unlimited Extension

The free plugin only allows **Import from file** (browser upload). **Restore** from the Backups list (e.g. after copying the .wpress into `wp-content/ai1wm-backups/`) is **not** available in the free version—the plugin will say: *“Restore functionality is available in our Unlimited Extension.”*

So you have two paths:

- **Free:** Make **Import from file** work by ensuring PHP and Nginx allow 2G (see below). No other free way to import a 1.3 GB backup.
- **Paid:** Buy the [Unlimited Extension](https://servmask.com/products/unlimited-extension); then you can put the .wpress in `wp-content/ai1wm-backups/` and use **Restore**.

### Make “Import from file” work (free path)

The upload goes to **`/wp-admin/admin-ajax.php?action=ai1wm_import`**. For it to succeed:

1. **PHP** (in **`conf/php/php.ini.hbs`**): `upload_max_filesize = 2G`, `post_max_size = 2G`.
2. **Nginx**: **`conf/nginx/nginx.conf.hbs`** → `client_max_body_size 2G;` in the `http { }` block. **`conf/nginx/site.conf.hbs`** → inside the `server { }` block add: `client_max_body_size 2G;`
3. **Force PHP from WordPress** (in case Local doesn’t apply php.ini): in **`app/public/wp-config.php`**, before *“That’s all, stop editing!”*, add:
   ```php
   @ini_set( 'upload_max_filesize', '2G' );
   @ini_set( 'post_max_size', '2G' );
   ```
4. **Restart Local fully:** Stop the site, then start it again. If it still fails, quit the Local app completely and open it again, then start the site.
5. **Verify PHP:** Create **`app/public/phpinfo.php`** with just `<?php phpinfo(); ?>`, open `http://elite-card-processing.local/phpinfo.php`, search for `upload_max_filesize` and `post_max_size`—they should show 2G. Delete **phpinfo.php** when done.

---

## Option B: MAMP

1. **Install MAMP**  
   https://www.mamp.info/

2. **Create a WordPress site**
   - Start MAMP, start servers.
   - Use MAMP’s tools or manually: download WordPress from wordpress.org, put it in `htdocs` (e.g. `htdocs/elitecard`), create a MySQL database for it, run the WordPress installer in the browser.

3. **Install All-in-One WP Migration** in that WordPress (Plugins → Add New).

4. **Import the .wpress file**  
   **All-in-One WP Migration → Import → File** and select your `.wpress` file.

**Note:** Free MAMP may have an upload size limit. If the import fails with “max size,” either increase `upload_max_filesize` and `post_max_size` in PHP settings, or use Local (Option A), which usually handles large imports better.

---

## Option C: Docker (if you use Docker)

1. **Create a folder** for the project (e.g. `wordpress-local`).

2. **Run WordPress with Docker:**
   ```bash
   docker run -d --name wp-local \
     -p 8080:80 \
     -v "$(pwd)/wp-data:/var/www/html" \
     wordpress:latest
   ```

3. **Finish WordPress setup** in the browser: http://localhost:8080 (database: create a MySQL container and use its details, or use a docker-compose with MySQL).

4. **Install All-in-One WP Migration** in that WordPress, then **Import → File** and select your `.wpress` file.

---

## After Import

- **URL:** The old site might have been at `https://elitecardprocessing.com`. Locally it will be something like `http://elitecardprocessing.local` (Local) or `http://localhost:8080` (MAMP/Docker). Some links or assets might still point to the old domain; that’s normal.
- **Login:** Use the admin credentials from the backup. If you’re not sure, try the user you created when making the new site in Local; sometimes the import keeps that.
- **Large file:** The `.wpress` file is ~1.3 GB. Import can take 5–15+ minutes. Don’t close the browser until it says “Import complete.”

---

## Quick summary

| Step | Action |
|------|--------|
| 1 | Install **Local by Flywheel** (or MAMP/Docker). |
| 2 | Create a new WordPress site. |
| 3 | In that WordPress: install **All-in-One WP Migration**, activate it. |
| 4 | **All-in-One WP Migration → Import → File** → select your `.wpress` file. |
| 5 | Wait for import, then open the site in the browser. |

Recommendation: use **Local by Flywheel** (Option A) for the fewest steps and best handling of large backups on Mac.
