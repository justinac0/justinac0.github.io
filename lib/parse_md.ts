import fs, { promises as fs_promise } from "fs"

import matter from 'gray-matter';
import remark from "remark";

export const get_file_names = (dir: string) => {
    return fs.readdirSync(dir).map((name) => {
        return dir + "/" + name;
    });
}

export const get_files = (file_names?: string[]) => {
    return file_names?.map((name) => {
        let file = fs_promise.readFile(name);
        return file;
    });
}

export const get_posts = async () => {
    let file_names = get_file_names("content/posts");

    if (file_names) {
        const files = await Promise.all(get_files(file_names) ?? []);

        return files?.map((file) => {
            const result: any = matter(file);
            delete result.orig;
            // parse with remark
            return result;
        });
    }
}

// export const load_post = (name: string) => {
//     const path = cwd() + "/content/posts/" + name;
//     const file = fs.readFileSync(path);

//     return file;
// }

// Get a specific post
// export const get_post = () => {
//     return "";
// }