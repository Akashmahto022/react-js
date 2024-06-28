import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  account;
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwritedatabseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.updateDocument(
        conf.appwritedatabseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwritedatabseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      //   throw error;
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwritedatabseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      throw error;
    }
  }

  async getAllPost(queries=[Query.equal('status',"active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwritedatabseId,
        conf.appwriteCollectionId,
        queries,
      );
    } catch (error) {
      throw error;
    }
  }


  // file upload service
  async uploadFile(file){
    try {
        await this.bucket.createFile(
            cont.appwriteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        throw error
    }
  }

  async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            cont.appwriteBucketId,
            fileId
        )        
        return true
    } catch (error) {
        throw error
    }
  }

  async previewFile(fileId){
    try {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    } catch (error) {
        throw error
    }
  }
}

const service = new Service();
export default service;
