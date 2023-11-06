import { ConflictException, Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Post[]> {
    return await this.prisma.post.findMany();
  }

  async findById(id: number): Promise<Post> {
    const post = await this.findPostById(id);

    if (!post) throw new ConflictException('Post not found');

    return post;
  }

  async create(dto: CreatePostDto): Promise<Post> {
    const newPost = await this.prisma.post.create({
      data: {
        ...dto,
      },
    });

    return newPost;
  }

  async delete(id: number): Promise<string> {
    const post = await this.findPostById(id);

    if (!post) throw new ConflictException('Post not found');

    await this.prisma.post.delete({
      where: {
        id,
      },
    });

    return 'Post deleted successfully';
  }

  async update(id: number, dto: UpdatePostDto): Promise<Post> {
    const post = await this.findPostById(id);

    if (!post) throw new ConflictException('Post not found');

    const updatedPost = await this.prisma.post.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return updatedPost;
  }

  private async findPostById(id: number): Promise<Post> {
    return await this.prisma.post.findUnique({
      where: {
        id,
      },
    });
  }
}
